/* tslint:disable */
/// <amd-dependency path="model/tree" />
import * as React from "react";

import { HistoricalCoinDataForCandlestickChart } from '../../types';

import { scaleTime } from "d3-scale";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

import { ChartCanvas, Chart } from "react-stockcharts";
import {
    BarSeries,
    CandlestickSeries,
} from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import {
    CrossHairCursor,
    EdgeIndicator,
    CurrentCoordinate,
    MouseCoordinateX,
    MouseCoordinateY,
} from "react-stockcharts/lib/coordinates";

import { OHLCTooltip } from "react-stockcharts/lib/tooltip";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";

interface CandleStickChartForContinuousIntraDayProps {
    data: HistoricalCoinDataForCandlestickChart[];
    width: number;
    ratio: number;
    type: string;
}

class CandleStickChartForContinuousIntraDay extends React.Component<CandleStickChartForContinuousIntraDayProps> {
    constructor(props: CandleStickChartForContinuousIntraDayProps) {
        super(props);
        this.state = {};
    }

    render() {
        const { type, data, width, ratio } = this.props;
        // tslint:disable-next-line:no-any
        const xAccessor = (d: any) => d.date;
        const start = xAccessor(last(data));
        const end = xAccessor(data[Math.max(0, data.length - 150)]);
        const xExtents = [start, end];

        return (
            <ChartCanvas
                height={400}
                ratio={ratio}
                width={width}
                margin={{ left: 80, right: 80, top: 10, bottom: 30 }}
                type={type}
                seriesName="MSFT"
                data={data}
                xScale={scaleTime()}
                xAccessor={xAccessor}
                xExtents={xExtents}
            >
                <Chart
                    id={2}
                    // tslint:disable-next-line:no-any
                    yExtents={[(d: any) => d.volume]}
                    height={150}
                    origin={(w: any, h: any) => [0, h - 150]}
                >
                    <YAxis axisAt="left" orient="left" ticks={5} tickFormat={format('.2s')} />

                    <MouseCoordinateY
                        at="left"
                        orient="left"
                        displayFormat={format('.4s')}
                    />


                    <BarSeries yAccessor={(d: any) => d.volume} fill={(d: any) => d.close > d.open ? '#6BA583' : '#FF0000'} />

                    <CurrentCoordinate yAccessor={(d: any) => d.volume} fill="#9B0A47" />

                    <EdgeIndicator
                        itemType="first"
                        orient="left"
                        edgeAt="left"
                        yAccessor={(d: any) => d.volume}
                        displayFormat={format('.4s')}
                        fill="#0F0F0F"
                    />
                    <EdgeIndicator
                        itemType="last"
                        orient="right"
                        edgeAt="right"
                        yAccessor={(d: any) => d.volume}
                        displayFormat={format('.4s')}
                        fill="#0F0F0F"
                    />
                </Chart>
                <Chart
                    id={1}
                    yExtents={[(d: any) => [d.high, d.low]]}
                    padding={{ top: 40, bottom: 20 }}
                >
                    <XAxis axisAt="bottom" orient="bottom" />
                    <YAxis axisAt="right" orient="right" ticks={5} />

                    <MouseCoordinateX
                        rectWidth={60}
                        at="bottom"
                        orient="bottom"
                        displayFormat={timeFormat('%H:%M:%S')}
                    />
                    <MouseCoordinateY
                        at="right"
                        orient="right"
                        displayFormat={format('.2f')}
                    />

                    <CandlestickSeries />

                    <EdgeIndicator
                        itemType="last"
                        orient="right"
                        edgeAt="right"
                        yAccessor={(d: any) => d.close}
                        fill={(d: any) => d.close > d.open ? '#6BA583' : '#FF0000'}
                    />

                    <OHLCTooltip origin={[-40, 0]} xDisplayFormat={timeFormat('%Y-%m-%d %H:%M:%S')} />
                </Chart>
                <CrossHairCursor />
            </ChartCanvas>
        );
    }
}

export default fitWidth(CandleStickChartForContinuousIntraDay);