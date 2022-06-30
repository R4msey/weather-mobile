import React, {useCallback} from 'react';
import {View, StyleSheet, SectionList} from 'react-native';

import {useAppSelector} from '../../../hooks/useRedux';
import {BottomSheet} from '../../common/bottomSheet';
import {Loader} from '../../common/loader';
import {filterArrayKey} from '../../../helpers/arrays/filter-array-key.helper';
import {IconsWeather} from '../../../utils/iconsWeather';
import {Title} from '../../common/typography';
import {dateTitle} from '../../../helpers/date/parse-date.helper';
import {colors} from '../../../theme/colors';

export const NextDaysBSheet = ({bsRef}) => {
  const {weather} = useAppSelector(selector => selector.weather);

  const renderItem = useCallback(({item}) => {
    const Icon = filterArrayKey(
      IconsWeather,
      item.temp_max_image[0].description,
    );
    return (
      <View style={styles.item}>
        <View style={styles.rowCenter}>
          <Icon.value width="35" height="35" />
          <Title
            size={17}
            style={{marginLeft: 10}}
            text={item.temp_max_image[0].description}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Title size={17} text={`${item.temp_max} ° `} />
          <Title
            color={colors.darkGray}
            size={17}
            text={`${item.temp_min} °`}
          />
        </View>
      </View>
    );
  }, []);

  const keyExtractor = useCallback(item => item.toString(), []);

  return (
    <View style={styles.wrapper}>
      <BottomSheet hasDraggableIcon visible ref={bsRef} height={450}>
        <View style={styles.container}>
          {weather ? (
            <SectionList
              sections={weather}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              style={{paddingHorizontal: 20}}
              renderSectionHeader={({section: {title}}) => {
                return (
                  <Title
                    style={{marginTop: 10}}
                    size={16}
                    text={dateTitle(title)}
                  />
                );
              }}
            />
          ) : (
            <Loader />
          )}
        </View>
      </BottomSheet>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 450,
    backgroundColor: colors.dark,
  },
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1000,
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
