<template>
    <div
        class="w-full bg-[#1E202B] shadow-lg hover:shadow-xl rounded-lg border border-[#383B4C]"
    >
        <!-- Header -->
        <div class="p-6">
            <div class="flex gap-4 items-center">
                <div
                    :class="[
                        'w-10 h-10 rounded-full flex items-center justify-center shrink-0',
                        currentAccentStyle.bg
                    ]"
                >
                    <v-icon :class="currentAccentStyle.text" size="20">{{
                        iconName
                    }}</v-icon>
                </div>
                <div>
                    <h1 class="text-white font-bold text-xl">{{ title }}</h1>
                    <p v-if="subtitle" class="text-gray-400 text-sm pt-1">
                        {{ subtitle }}
                    </p>
                </div>
            </div>
        </div>

        <!-- Main Content Area -->
        <div class="px-6 pb-6 space-y-6">
            <slot></slot>
            <!-- Default slot for main content -->
        </div>

        <!-- Footer -->
        <div
            v-if="$slots.footerContent"
            :class="[
                'px-6 py-4 bg-[#292B3A] border-t border-[#383B4C] flex items-center rounded-b-lg',
                footerJustifyClass
            ]"
        >
            <slot name="footerContent"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, type PropType } from 'vue'

type IconAccent = 'purple' | 'green' | 'blue' | 'amber' | 'default' // Extend as needed
type FooterAlignment = 'start' | 'end' | 'between'

export default defineComponent({
    name: 'BaseCard',
    props: {
        title: { type: String, required: true },
        subtitle: { type: String, default: '' },
        iconName: { type: String, required: true },
        iconAccent: {
            type: String as PropType<IconAccent>,
            default: 'default'
        },
        footerAlignment: {
            type: String as PropType<FooterAlignment>,
            default: 'between'
        }
    },
    setup(props) {
        const accentStylesMap: Record<
            IconAccent,
            { bg: string; text: string }
        > = {
            purple: { bg: 'bg-purple-500/20', text: 'text-purple-400' },
            green: { bg: 'bg-green-500/20', text: 'text-green-400' },
            blue: { bg: 'bg-blue-500/20', text: 'text-blue-400' }, // Standard blue for consistency
            amber: { bg: 'bg-amber-500/20', text: 'text-amber-400' }, // For 'Why JSON' if we use an accent there
            default: { bg: 'bg-gray-500/20', text: 'text-gray-400' }
        }

        const currentAccentStyle = computed(() => {
            return accentStylesMap[props.iconAccent] || accentStylesMap.default
        })

        const footerJustifyClass = computed(() => {
            const alignmentMap: Record<FooterAlignment, string> = {
                start: 'justify-start',
                end: 'justify-end',
                between: 'justify-between'
            }
            return alignmentMap[props.footerAlignment]
        })

        return {
            currentAccentStyle,
            footerJustifyClass
        }
    }
})
</script>
