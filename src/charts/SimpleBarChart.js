import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default class SimpleBarChart extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ResponsiveContainer width={'100%'} height={300}>
                <BarChart
                    width={500}
                    height={300}
                    data={this.props.dataTest}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#0088FE" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
