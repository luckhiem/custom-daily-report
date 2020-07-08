import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
    { date: 'July 8, 2020', testCases: 300},
    { date: 'July 9, 2020', testCases: 100},
    { date: 'July 10, 2020', testCases: 9},
    { date: 'July 11, 2020', testCases: 53},
    { date: 'July 12, 2020', testCases: 252},
    { date: 'July 13, 2020', testCases: 300},
    { date: 'July 14, 2020', testCases: 100},
    { date: 'July 15, 2020', testCases: 9},
    { date: 'July 16, 2020', testCases: 53},
    { date: 'July 17, 2020', testCases: 252},
    { date: 'July 18, 2020', testCases: 300},
    { date: 'July 19, 2020', testCases: 100},
    { date: 'July 20, 2020', testCases: 9},
    { date: 'July 21, 2020', testCases: 53},
    { date: 'July 22, 2020', testCases: 252},
];

export default class Example extends PureComponent {
    render() {
        const data = this.props.dataTest.dateData
        return (
            <ResponsiveContainer width={'100%'} height={500}>
                <BarChart
                    width={500}
                    height={500}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                    <ReferenceLine y={0} stroke="#000" />
                    <Brush dataKey="date" height={30} stroke="#8884d8" />
                    <Bar dataKey="testCases" fill="#556B2F" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
