import { ThemedView } from '@/components/ThemedView'
import { Button, Input } from '@rneui/themed'

type StepProps = {
  goToPage: () => void
}

export default function StepsStep({ goToPage }: StepProps) {
  return (
    <ThemedView>
      <Input
        label="Име"
        placeholder='Име на стъпката'
      />
      <Input
        label="Описание"
        placeholder='Описание на стъпката'
      />
      <Button title="Добави снимка" />
      <Button title="Запазване" onPress={() => goToPage()} />

    </ThemedView>
  )
}