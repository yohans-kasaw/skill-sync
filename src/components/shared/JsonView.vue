<template>
    <div
        ref="editorRef"
        class="min-h-[27rem] text-base"
        :style="{ background: bgEditor }"
    ></div>
</template>

<script>
import { EditorView, basicSetup } from 'codemirror'
import { keymap } from '@codemirror/view'
import { indentWithTab } from '@codemirror/commands'
import { EditorState } from '@codemirror/state'
import { json as json_extension } from '@codemirror/lang-json'
import { indentUnit } from '@codemirror/language'
import { oneDark, color as oneDarkThemeColor } from '@codemirror/theme-one-dark'
import { mapState } from 'pinia'
import { useUserSettingsStore } from '@/lib/store'
export default {
    name: 'JsonView',
    props: {
        modelValue: String,
    },
    emits: ['update:modelValue'],
    data() {
        return {
            bgEditor: oneDarkThemeColor.background,
            editorView: null,
            placeholder:
                '{ "name": "Jane Smith", "email": "jane@example.com", "summary": "Software Engineer skilled in Python." }',
        }
    },
    computed: {
        ...mapState(useUserSettingsStore, ['tabSize']),
    },
    mounted() {
        const updateEmitter = EditorView.updateListener.of((update) => {
            if (update.docChanged) {
                this.$emit('update:modelValue', update.state.doc.toString())
            }
        })
        this.editorView = new EditorView({
            state: EditorState.create({
                doc: this.modelValue || this.placeholder,
                extensions: [
                    indentUnit.of(' '.repeat(this.tabSize)),
                    oneDark,
                    json_extension(),
                    keymap.of([indentWithTab]),
                    basicSetup,
                    updateEmitter,
                ],
            }),
            parent: this.$refs.editorRef,
        })
    },
    methods: {
        update(event) {
            this.$emit('update:modelValue', event.target.value)
        },
    },
    watch: {
        modelValue(newValue, oldValue) {
            if (
                !(
                    this.editorView &&
                    newValue !== this.editorView.state.doc.toString()
                )
            )
                return
            this.editorView.dispatch({
                changes: {
                    from: 0,
                    to: this.editorView.state.doc.length,
                    insert: newValue,
                },
            })
        },
    },
}
</script>
<style></style>
n
