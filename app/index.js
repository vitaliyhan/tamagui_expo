import { Text, View } from "react-native";
import { Button, H1, H2, H3, H4, H5, H6, Stack, XStack, YStack } from "tamagui";

export default function Home() {
  return (
    <View style={{ backgroundColor: '#f6f6f6', flex: 1 }}>
      <Stack g={20}>
        <Text>Home</Text>
        <Button c="green">Home</Button>
      </Stack>
      <XStack g={'$1'} p={30} bc={'green'}>
        <Text>Home</Text>
        <Button color="green">Home</Button>
      </XStack>
      <YStack gap={20}>
        <Text>Home</Text>
        <Button c="green">Home</Button>
      </YStack>
      <Stack>
        <Button br={'$4'} size={'$1'} bc={'red'}>1</Button>
        <Button bc={'#4960d4'}>2</Button>
      </Stack>
      <H1>Hi</H1>
      <H2>Hi</H2>
      <H3>Hi</H3>
      <H4>Hi</H4>
      <H5>Hi</H5>
      <H6>Hi</H6>
    </View>
  );
} 