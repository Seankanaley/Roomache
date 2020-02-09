import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import HeartButton from '../buttons/HeartButton';
import Stars from '../Stars';
import colors from '../../styles/colors';

export default class Listings extends Component {
  constructor(props) {
    super(props);
    this.renderListings = this.renderListings.bind(this);
  }

  renderListings() {
    const {
      listings, showAddToFav, handleAddToFav, favouriteListings,
    } = this.props;
    return listings.map((listing, index) => (
      <TouchableHighlight
        style={styles.card}
        key={`listing-${index}`}
      >
        <View>
          {showAddToFav
            ? (
              <View style={styles.addToFavoriteBtn}>
                <HeartButton
                  color={colors.white}
                  selectedColor={colors.blue01}
                  selected={favouriteListings.indexOf(listing.id) > -1}
                  onPress={() => handleAddToFav(listing)}
                />
              </View>
            )
            : null}
          <Image
            style={styles.image}
            resizeMode="contain"
            source={listing.photo}
          />
          <Text style={[{ color: listing.color }, styles.listingName]}>
            {listing.name}
          </Text>
          <Text
            style={styles.listingPersonality}
            numberOfLines={2}
          >
            {listing.personality}
          </Text>
          <Text style={styles.listingLocation}>
            {listing.location}
            {' '}
          </Text>
          {listing.stars > 0
            ? (
              <Stars
                votes={listing.stars}
                size={10}
                color={colors.blue02}
              />
            )
            : null}
        </View>
      </TouchableHighlight>
    ));
  }

  render() {
    const { title, boldTitle } = this.props;
    const titleStyle = boldTitle ? { fontSize: 22, fontWeight: '600' } : { fontSize: 18 };
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={[titleStyle, styles.title]}>
            {title}
          </Text>
          <TouchableOpacity style={styles.seeAllBtn}>
            <Text style={styles.seeAllBtnText}>
              See all
          </Text>
            <FontAwesome
              name="angle-right"
              size={18}
              color={colors.gray04}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{ paddingRight: 30 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {this.renderListings()}
        </ScrollView>
      </View>
    );
  }
}

Listings.propTypes = {
  title: PropTypes.string.isRequired,
  boldTitle: PropTypes.bool,
  listings: PropTypes.array.isRequired,
  showAddToFav: PropTypes.bool,
  handleAddToFav: PropTypes.func,
  favouriteListings: PropTypes.array,
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 21,
    paddingRight: 21,
  },
  title: {
    color: colors.gray04,
  },
  seeAllBtn: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeAllBtnText: {
    color: colors.gray04,
    marginRight: 5,
  },
  scrollView: {
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 40,
  },
  card: {
    marginRight: 6,
    marginLeft: 6,
    width: 157,
    flexDirection: 'column',
    minHeight: 100,
  },
  image: {
    width: undefined,
    flex: 1,
    height: 100,
    borderRadius: 8,
    marginBottom: 7,
  },
  listingCredit: {
    fontSize: 12,
    fontWeight: '500'
  },
  listingPersonality: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.gray04,
    marginTop: 2,
  },
  listingName: {
    fontWeight: '700',
    fontSize: 10,
  },
  addToFavoriteBtn: {
    position: 'absolute',
    right: 12,
    top: 7,
    zIndex: 2,
  },
  listingLocation: {
    color: colors.blue,
    marginTop: 4,
    marginBottom: 2,
    fontSize: 12,
    fontWeight: '300',
  },
});
