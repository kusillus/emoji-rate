<template>
	<div class="container">
		<emoji-rate
			:current_rate="current_rate"
			@setRate="setRate"/>
	</div>
</template>

<script>
import EmojiRate from '@/components/emoji_rate.vue'

export default {
	data() {
		return {
			current_rate: 3,
		}
	},
	components: {
		'emoji-rate':EmojiRate
	},
	methods: {
		setRate(i) {
			let vm = this
			vm.current_rate = i
		}
	}
}
</script>

<style>
.container {
  	margin: 0 auto;
	min-height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
	'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
