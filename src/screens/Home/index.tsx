import { FlatList, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')

    function handleParticipantAdd() {
        if(participants.includes(participantName)){
            return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.")
        }

        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('')
    }

    function handleParticipantRemove(name: String) {

        Alert.alert("Remover", `Deseja remover o/a participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
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
                    onChangeText={text => setParticipantName(text)}
                    value={participantName}
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
