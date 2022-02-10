<template>
  <v-sparkline
    :value="value"
    :gradient="gradient"
     :smooth="50"
    :padding="padding"
    :line-width="width"
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
  />
</template>

<script>
const gradients = [
  ['#EAECF0'],
  ['#EAECF0'],
  ['green', 'green', 'green'],
  ['green', '#EAECF0'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#EAECF0', '#EAECF0', '#EAECF0']
]

export default {
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    color: 'green',
    lineCap: 'round',
    gradient: gradients[2],
    value: [0, 15, 5, 1, 15, 25],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false
  })
}
</script>
