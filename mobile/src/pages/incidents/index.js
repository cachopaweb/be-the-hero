import React, { useState, useEffect} from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from "./styles";
import logoImg from "../../assets/logo.png";
import api from "../../services/api";

export default function Incidents() {
  const [incidents, setIncidents] = useState([]); 
  const [TotalCasos, setTotalCasos] = useState(0);
  const [Page, setPage] = useState(1);
  const [Loading, setLoading] = useState(false);
  const navigation = useNavigation();

  async function loadIncidents(){
    if (Loading) {
      return;
    }

    if ((TotalCasos > 0) && (incidents.length === TotalCasos)){
      return;
    }

    setLoading(true)
    const response = await api.get('incidents', { params: Page });
    setIncidents([...incidents, ...response.data]);
    setTotalCasos(response.headers['x-total-count']);
    setPage(Page + 1);
    setLoading(false);
  }

  useEffect(()=>{
     loadIncidents();
  }, [])

  function navigateToDetail(incident){
     navigation.navigate('Detail', { incident }); 
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}></Image>
        <Text style={styles.headerText}>
          {" "}
          Total <Text style={styles.headerTextBold}>de {TotalCasos} casos.</Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>
    
      <FlatList 
        data={incidents}
        style={styles.incidentList}
        showsVerticalScrollIndicator={true}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        keyExtractor={incident => String(incident.id)}
        renderItem={({ item: incident})=> (
        <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>Caso:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>Valor:</Text>
            <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>

            <TouchableOpacity
                style={styles.detailsButton}
                onPress={()=> navigateToDetail(incident)}
            >
                <Text style={styles.detailsButtonText}>Ver mais detahles</Text>
                <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
        </View>
        )}
      />
    </View>
  );
}
