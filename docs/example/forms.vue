<template>
	<section>
		<h3 class="doc-title">Radio</h3>
		<p>
			<z-radio value="radio1" :checked.sync="radioChecked">Radio1</z-radio>	
		</p>
		<p>
			<z-radio value="radio2" :checked.sync="radioChecked">Radio2</z-radio>
		</p>
		<p>
			<z-radio value="radio3" :checked.sync="radioChecked" disabled="true">Radio3</z-radio>
		</p>
		selected radio: {{ checked }}
		<z-code lang="html">{{ radioCode }}</z-code>
	</section>
	<section>
		<h3 class="doc-title">Checkbox</h3>
		<p><z-checkbox value="checkbox1" id="box1" :checked.sync="checkbox">checkbox1</z-checkbox></p>
		<p><z-checkbox value="checkbox2" :checked.sync="checkbox">checkbox2</z-checkbox></p>
		<p><z-checkbox value="checkbox3" :checked.sync="checkbox">checkbox3</z-checkbox></p>
		<p><z-checkbox value="checkbox4" :checked.sync="checkboxD" disabled>checkbox3</z-checkbox></p>
		<z-code lang="html">{{ checkboxCode }}</z-code>
	</section>
	<section>
		<h3 class="doc-title">Switch</h3>
		<p><z-switch value="switch1" id="box2" :checked.sync="switchbox">checkbox1</z-switch></p>
		<p><z-switch value="switch2" :checked.sync="switchbox">checkbox2</z-switch></p>
		<p><z-switch value="switch3" :checked.sync="switchbox">checkbox3</z-switch></p>
		<p><z-switch value="switch4" :checked.sync="switchboxd" disabled>checkbox4</z-switch></p>
		<z-code lang="html">{{ checkboxCode }}</z-code>
	</section>
</template>
<script>
	import ZCode from '../utils/zcode.vue';

	export default {
		components: {
			ZCode
		},
		data () {
			return {
				radioChecked: 'radio1',
				radioCode: `<z-radio value="radio1" :checked.sync="checked">Radio1</z-radio>
			<z-radio value="radio2" :checked.sync="checked">Radio2</z-radio>
			<z-radio value="radio3" :checked.sync="checked" disabled="true">Radio3</z-radio>`,
				checkbox: true,
				checkboxD: false,
				checkboxCode: `<z-checkbox value="checkbox1" id="box1" :checked.sync="checkbox">checkbox1</z-checkbox>
			<z-checkbox value="checkbox2" :checked.sync="checkbox">checkbox2</z-checkbox>
			<z-checkbox value="checkbox3" :checked.sync="checkbox">checkbox3</z-checkbox>
			<z-checkbox value="checkbox4" :checked.sync="checkboxD" disabled>checkbox3</z-checkbox>`,
				switchbox: true,
				switchboxd: false,
				switchCode: `z-switch value="switch1" id="box2" :checked.sync="switchbox">checkbox1</z-switch>
			<z-switch value="switch2" :checked.sync="switchbox">checkbox2</z-switch>
			<z-switch value="switch3" :checked.sync="switchbox">checkbox3</z-switch>
			<z-switch value="switch4" :checked.sync="switchboxd" disabled>checkbox4</z-switch>`
			}
		},
		ready () {
			this.$dispatch('changeComponent', 'Forms');
		}
	}
</script>