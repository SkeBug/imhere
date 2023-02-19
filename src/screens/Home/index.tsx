import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home() {

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

      <ScrollView>
        <Participant name="Emanuela Xavier" onRemove={ () => handleParticipantRemove('Emanuela Xavier') } />
      </ScrollView>

    </View>
  )
}