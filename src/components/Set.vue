<script>
import { onMounted, onUpdated, onUnmounted } from 'vue';

export default {
  setup(props, context) {
    console.log(props.arg1);
    console.log(context);
    onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
  },

  props: {
    arg1: string,
    arg2: int,
  },

  // context中的内容：
  // context :{
  // attrs: Data
  // slots: Slots
  // emit: (event: string, ...args: unknown[]) => void
  // 以及parent, refs, root...
  // }
};
</script>
