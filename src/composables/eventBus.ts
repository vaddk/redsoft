import { useEventBus } from '@vueuse/core'

export const searchBus = useEventBus<string>('search')