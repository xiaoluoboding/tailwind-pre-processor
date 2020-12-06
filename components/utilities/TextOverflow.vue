<template>
  <TailContent title="Text Overflow" version="v2.0.0+">
    <!-- Truncate -->
    <TailBlock name="Truncate">
      <div class="rounded-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-indigo-100 p-10">
        <p class="truncate max-w-xs px-6 py-4 mx-auto bg-indigo-200 text-indigo-500 font-medium rounded-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.
        </p>
      </div>
    </TailBlock>
    <!-- Overflow Ellipsis -->
    <TailBlock name="Overflow Ellipsis">
      <div class="rounded-xl overflow-hidden bg-gradient-to-r from-green-50 to-teal-100 p-10">
        <p class="overflow-ellipsis overflow-hidden max-w-xs px-6 py-4 mx-auto bg-green-200 text-green-500 font-medium rounded-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.
        </p>
      </div>
    </TailBlock>
    <!-- Overflow Clip -->
    <TailBlock name="Overflow Clip">
      <div class="rounded-xl overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100 p-10">
        <p class="overflow-clip overflow-hidden max-w-xs px-6 py-4 mx-auto bg-blue-200 text-blue-500 font-medium rounded-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.
        </p>
      </div>
    </TailBlock>
  </TailContent>
</template>

<script>
import TailContent from './TailContent.vue'
import TailBlock from './TailBlock.vue'

export default {
  name: 'TextOverflow',
  components: {
    TailContent,
    TailBlock
  }
}
</script>
