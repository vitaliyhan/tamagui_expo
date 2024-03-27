import { createAnimations } from '@tamagui/animations-moti';
import { config as configBase } from "@tamagui/config";
import { createTamagui } from "tamagui";


const animations = createAnimations({
    fast: {
        type: 'spring',
        damping: 20,
        mass: 1.2,
        stiffness: 250,
    },
    medium: {
        type: 'spring',
        damping: 10,
        mass: 0.9,
        stiffness: 100,
    },
    slow: {
        type: 'spring',
        damping: 20,
        stiffness: 60,
    },
});


const config = createTamagui({ ...configBase, animations });

export default config