import { FlatList, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export function Home() {
    const participants = ['Marcelo', 'Ana Clara', 'Arthur', 'Biro', 'Isa', 'Mayke', 'José', 'Gabriel', 'Felipe']

    function handleParticipantAdd() {
        if(participants.includes("Marcelo")){
            return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.")
        }
    }

    function handleParticipantRemove(name: String) {
        Alert.alert("Remover", `Deseja remover o/a participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert("Deletado!", `Participante deletado com sucesso.`)
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
        console.log(`O botão foi removido ${name}`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                    keyboardAppearance="dark"
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
              data={participants}
              keyExtractor={item => item}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
              )} 
              ListEmptyComponent={() => (
                <Text style={styles.listEmptyComponent}>
                    Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
                </Text>
              )}
            />
                
                
                  


        </View>

    )
}
