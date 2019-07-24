<template>
	<div class="layout-container">
		<div class="menu-bar">
			<img :src="logo" class="" alt="">
		</div>
		<div class="container-body">
			<nuxt />
		</div>
		<div class="footer">
			<template v-for="(item, i) in social">
				<a :href="item.url" :key="i" class="social-link" target="_blank">
					<i v-html="item.icon" :key="i"></i>
				</a>
			</template>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			logo: require('~/assets/logo.png'),
			social: [
				{
					url: 'https://www.facebook.com/kusillus',
					icon: '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#a0aec0" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" /></svg>'
				},
				{
					url: 'https://www.linkedin.com/in/kusillus/',
					icon: '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#a0aec0" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" /></svg>',
				},
				{
					url: 'https://www.instagram.com/kusillus',
					icon: '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#a0aec0" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg>',
				},
				{
					url: 'https://www.youtube.com/c/kusillus',
					icon: '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#a0aec0" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" /></svg>'
				}
			]
		}	
	}
}
</script>


<style lang="scss">
$base-border: #e4e4e4;

html {
	font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, 'Helvetica Neue', Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}

.layout-container{
	display: grid;
	grid-template-rows: 70px auto 70px;
	grid-template-columns: 1fr minmax(0rem, 1000px) 1fr;
	min-height: 100vh;
}
.menu-bar {
	border-bottom: solid 1px $base-border;
	grid-column: 1 / 4;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		height: 90%;
	}
}

.container-body {
	grid-column: 2 / 3;
	padding-top: 5px;
	padding-bottom: 5px;
}
@media screen and (max-width: 400px) {
	.container-body {
		grid-column: 1 / 4;
	}	
}

.footer {
	grid-column: 1 / 4;
    display: flex;
    align-items: center;
    justify-content: center;
	border-top: solid 1px $base-border;
}
.social-link {
	margin: 0 15px;
}
</style>
