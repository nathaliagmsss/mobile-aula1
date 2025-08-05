import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native/types";
import { useQuery } from "@tanstack/react-query";   // Hook para fazer queries
import fetchUsers from './api/posts'    // Função para buscar users

export default function App() {
    // O useQuery é o hook principal do Tanstack Query
    // queryKey: chave única para identificar 
    // queryFn: função que executa a requisição

    const{data, isLoading, isError, error} = useQuery({
        queryKey: ['posts'],
        queryFn: fetchUsers
    })

    // Exibe um spinner enquanto os dados estão sendo carregados
    if (isLoading) {
        return <ActivityIndicator size='large' style={styles.center}/>
    }

    // Exibe msg de erro se houver falha na requisição
    if (isError) {
        return (
        <View style={styles.center}>
            <Text>Erro ao buscar os dados</Text>
            <Text>Mensagem de erro: {error.message}</Text>
        </View>
        )
    }
}