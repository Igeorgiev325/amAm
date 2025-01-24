import { Button } from "@rneui/themed"

type PillButtonProps = {
  title: string
}

export default function PillButton({ title }: PillButtonProps) {
  return (
    <Button 
      size="sm"
      title={title}
      radius='10'
      type='outline'
      titleStyle={{
        fontSize: 12
      }}
      icon={{
        name: 'user',
        type: 'font-awesome',
        size: 15,
        color: 'white',
      }}
    />
  )
}