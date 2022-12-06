import { Component } from 'react';
import { StyleSheet, Text, View,
ScrollView, FlatList } 
from 'react-native';

import Pessoas from './src/Pessoas';

class app extends Component{

  
  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id:'1',nome:'Matheus', idade:50, email:'matheus@matheus.com'},
        {id:'2',nome:'João', idade:22, email:'joao@mjoao.com'},
        {id:'3',nome:'Henrique', idade:39, email:'henrique@henrique.com'},
        {id:'4',nome:'Paulo', idade:15, email:'paulo@paulo.com'},
        {id:'5',nome:'Jose', idade:12, email:'jose@jose.com'},
      ]
    };

  };



render(){
  return (
    <View style={styles.container}>

      <FlatList
      data={this.state.feed}
      
      renderItem={({item}) => <Pessoas data={item} />}
      />
      
    </View>
  )
};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
  
});

export default app;


