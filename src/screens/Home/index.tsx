import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home() {

  const participants = ['Emanuela', 'Margarida', 'Marília', 'Letícia', 'Kirah', 'Paula', 'Maisa', 'Maria', 'Jéssica', 'Janeth', 'Jandira']

  function handleParticipantAdd() {
    console.log('Clicou para adicionar')
  }

  function handleParticipantRemove(name: string) {
    console.log(`Clicou para remover ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Quinta, 16 de Fevereiro de 2023
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(`${item}`)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ao evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

    </View>
  )
}