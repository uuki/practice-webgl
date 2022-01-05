<script lang="ts">
import { ref, onMounted } from 'vue'
import p5 from 'p5'

export default {
  setup() {
    const canvasRef = ref<HTMLDivElement | null>(null)

    // onMounted(() => {
    //   const canvasDiv: HTMLDivElement = canvasRef?.value as HTMLElement

    //   console.log(canvasDiv)

    //   if (canvasDiv) {
    //     canvasDiv.innerText = 'aaa'
    //     console.log(canvasDiv.innerText)
    //   }
    // })

    return {
      canvasRef,
    }
  },
  data() {
    return {
      p5: null as p5 | null,
      canvasWidth: 600,
      canvasHeight: 600,
      r: 0,
      x: 0,
      s: '0',
    }
  },
  mounted() {
    if (this.canvasRef) {
      new p5(this.createCanvas, this.canvasRef)
    }
  },
  methods: {
    createCanvas(p5: p5): void {
      this.p5 = p5

      p5.setup = (): void => {
        this.r = Math.min(this.canvasWidth, this.canvasHeight) / 6
        this.x = this.r

        p5.createCanvas(this.canvasWidth, this.canvasHeight)
      }
      p5.draw = (): void => {
        this.x += 10
        if (this.x > this.canvasWidth + this.r) {
          this.x = -this.r
        }

        this.p5?.clear()
        this.p5?.circle(this.x, this.canvasHeight / 2, this.r * 2)

        if ((this.p5?.frameCount || 0) % 30 === 0) {
          this.s = this.p5?.frameRate().toFixed(0) as string
        }

        this.p5?.push()
        this.p5?.noStroke()
        this.p5?.fill(240)
        this.p5?.text(this.s, 20, 20)
        this.p5?.pop()
      }
    },
    mouseClicked() {
      this.x += 10
      if (this.x > this.canvasWidth + this.r) {
        this.x = -this.r
      }
      this.p5?.draw()
    },
  },
}
</script>

<template>
  <div>
    <div ref="canvasRef"></div>
    <button @click="mouseClicked">click</button>
  </div>
</template>

<style></style>
