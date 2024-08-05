import { View } from "react-native"
import Animated, { FadeInUp, FadeOutDown, LayoutAnimationConfig } from "react-native-reanimated"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Progress } from "~/components/ui/progress"
import { Text } from "~/components/ui/text"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip"
import { Info } from "~/lib/icons/Info"

const GITHUB_AVATAR_URI =
  "https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg"

export default function Screen() {
  return (
    <View className="flex-1 items-center justify-center gap-5 bg-secondary/30 p-6">
      <Text className="text-blue-500 dark:text-red-500">
        Hello, world!
      </Text>
    </View>
  )
}
