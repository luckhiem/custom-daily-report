import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer

} from 'recharts';

const testData = [
    {
        "name": "Automation",
        "total": 120
    },
    {
        "name": "Total Test Case",
        "total": 300
    }
];

export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q4eonc12/';

    render() {
        return (
            <ResponsiveContainer width={'100%'} height={300}>
                <BarChart
                    width={500}
                    height={300}
                    data={testData}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
                    <Bar dataKey="total" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
