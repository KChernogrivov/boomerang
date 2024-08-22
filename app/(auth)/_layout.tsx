import { Redirect, Stack } from 'expo-router'

export default function AuthRoutesLayout() {
    const isSignedIn = true;

    if (isSignedIn) {
        return <Redirect href={'/home'} />
    }

    return <Stack />
}