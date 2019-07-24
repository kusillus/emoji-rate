<template>
    <div class="container_rate">
        <div class="emoji_box">
            <img
                class="emoji_svg"
                :class="active_animation"
                style="width:50px;"
                :src="current_emoji"
                alt="">
        </div>
        <div>
            <span
                v-for="i in 5"
                :key="i">
                <img 
                    style="width:50px;"
                    class="svg"
                    :class="getRate(i,current_rate)"
                    @click="setRate(i)"
                    :src="start"
                    alt="">
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        current_rate: {
            default: 1,
            type: Number
        }
    },
    data() {
        return {
            active_animation: '',
            current_emoji: '',
            emoji_rate: {
                icon_1: require('@/assets/emojis/00.svg'),
                icon_2: require('@/assets/emojis/01.svg'),
                icon_3: require('@/assets/emojis/02.svg'),
                icon_4: require('@/assets/emojis/03.svg'),
                icon_5: require('@/assets/emojis/04.svg'),
            },
            start: require('@/assets/star.svg')
        }
    },
    mounted() {
        this.setRate(this.current_rate)
    },
    methods: {
        getRate(i,rate) {
            return i <= rate ? 'active_star': ''
        },

        setRate(i) {
            let vm = this
            if(vm.current_emoji === vm.emoji_rate['icon_'+i]) {
                vm.active_animation = 'repeat_animation'
                setTimeout(() => {
                    vm.active_animation = ''
                },400)
            } else {
                vm.active_animation = 'emoji_out'
                setTimeout(() => {
                    vm.active_animation = 'emoji_in'
                    vm.current_emoji = vm.emoji_rate['icon_'+i]
                    vm.$emit('setRate', i)
                },400)
            }
        }
    }
}
</script>

<style>
.svg {
	width: 100%;
	height: auto;
	filter: invert(91%) sepia(1%) saturate(2780%) hue-rotate(192deg) brightness(109%) contrast(89%);
	text-shadow: 0px 1px 10px rgba(0, 0, 0, 1);
}
.svg:hover {
	cursor: pointer;
	filter: invert(50%) sepia(99%) saturate(527%) hue-rotate(3deg) brightness(106%) contrast(101%);
}
.active_star {
	filter: invert(84%) sepia(42%) saturate(2520%) hue-rotate(349deg) brightness(102%) contrast(101%);
}
.container_rate {
	width: 100%;
}
.emoji_box {
	height: 52px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	position: relative;
}
.emoji_in {
	position: absolute;
	animation: animate_svg_in .4s;
}
.emoji_out {
	position: absolute;
	animation: animate_svg_out .4s;
}
.repeat_animation{
	position: absolute;
	animation: animate_svg_repeat .4s;
}
@keyframes animate_svg_in {
	0% {
		top: 50px;
		transform: rotate(0deg)
	}
	100% {
		top: 0;
		transform: rotate(360deg)
	}
}
@keyframes animate_svg_out {
	0% {
		top: 0;
		transform: rotate(0deg)
	}
	100% {
		top: 50px;
		transform: rotate(360deg)
	}
}
@keyframes animate_svg_repeat {
	0% {
		transform: rotate(0deg)
	}
	100% {
		transform: rotate(360deg)
	}
}
</style>
