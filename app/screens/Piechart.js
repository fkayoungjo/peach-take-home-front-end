import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import { Text as SVGText } from 'react-native-svg';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../styles/styles';

export const Labels = ({ slices, radius }) => {
  return slices.map((slice, index) => {
    const { pieCentroid, data } = slice;
    const labelRadius = radius + 20;

    const labelCentroid = [
      pieCentroid[0] * (labelRadius / radius),
      pieCentroid[1] * (labelRadius / radius),
    ];

    return (
      <SVGText
        key={index}
        x={labelCentroid[0]}
        y={labelCentroid[1]}
        fill={'#6C727C'}
        textAnchor={'middle'}
        alignmentBaseline={'middle'}
        fontSize={10}
        fontWeight={'500'}
        stroke={'#6C727C'}
        strokeWidth={0.2}
      >
        {data.percentage}%
      </SVGText>
    );
  });
};

const Piechart = ({categorySpending, totalSpent, categoryMap}) => {

  const renderCategorySpending = ({ item }) => (
    <View style={[styles.pieAmountContainer, { padding: '5px', }]}>
      <Text style={styles.pieCategoryText}> {categoryMap[item.categoryId].emoji} {categoryMap[item.categoryId].name}</Text>
      <Text style={styles.pieCategoryAmount}> ${item.amount}</Text>
    </View>
  );

  const pieData = categorySpending.map((item) => ({
    value: parseFloat(item.amount),
    svg: {
      fill: categoryMap[item.categoryId].color,
    },
    key: `pie-${item.categoryId}`,
    percentage: Math.round(item.percentage),
  }));

  return (
    <View style={styles.pieContainer}>
      <Text style={styles.pieText}>Top Spending Categories</Text>
      <FlatList
        data={categorySpending}
        renderItem={renderCategorySpending}
        keyExtractor={(item) => item.categoryId.toString()}
        style={{ marginTop: 10, top: 45, left: 20 }}
      />
      <PieChart
        style={styles.pie}
        data={pieData}
        outerRadius={40}
      >
        <Labels radius={60} />
      </PieChart>
      <Text style={styles.totalText}>Total:</Text>
      <Text style={styles.totalAmount}>${totalSpent}</Text>
    </View>
  );
};

export default Piechart;
