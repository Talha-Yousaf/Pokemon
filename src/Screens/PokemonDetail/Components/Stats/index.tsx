import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles';
import { formatStatLabel } from '../../../../Helper';


interface StatProps {
  stats: { name: string, value: number }[],
  primaryColor: string
}
const Stats = ({ stats, primaryColor }: StatProps): React.JSX.Element => {
  return (
    <View style={styles.container}>
      {
        stats.map((stat: { name: string, value: number },index:number) => {
          const clampedValue = Math.max(0, Math.min(stat?.value, 100));
          return (
            <View key={index} style={styles.statRow}>
              <Text style={[styles.statLabelText, { color: primaryColor }]}>{formatStatLabel(stat.name)}</Text>
              <View style={styles.progressRow}>
                <Text>{stat.value.toString().padStart(3, '0')}</Text>
                <View style={[styles.barBackground, { backgroundColor: `${primaryColor}30` }]}>
                  <View style={[styles.barFill, {
                    width: `${clampedValue}%`,
                    backgroundColor: primaryColor
                  }]} />
                </View>
              </View>
            </View>
          )
        })
      }
      <View style={styles.line}/>
    </View>
  )
}

export default Stats