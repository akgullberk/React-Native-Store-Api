import {Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {getDetailApi} from '../../service';
import {Loading} from '../../components';

const Detail = ({route}) => {
  const [data, setData] = useState([]);
  const {id} = route.params;
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    detail();
  }, []);

  const detail = () => {
    getDetailApi('/' + id)
      .then(detail => {
        console.log(id);
        setData(detail);
        setLoading(false);
      })
      .catch(error => {
        console.error('hata:', error);
      });
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={styles.image}></Image>
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.price}>{data.price} TL</Text>
      </View>
    </View>
  );
};

export default Detail;
