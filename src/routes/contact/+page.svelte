<script lang="ts">
	import { onMount } from 'svelte';
	import emailjs from '@emailjs/browser';

	let formData = {
		name: '',
		email: '',
		details: ''
	};

	let isSubmitting = false;
	let submitStatus: { success?: string; error?: string } = {};

	onMount(() => {
		// Initialize EmailJS with your user ID
		emailjs.init('YOUR_USER_ID');
	});

	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault();
		isSubmitting = true;
		submitStatus = {};

		try {
			const response = await emailjs.send(
				'service_muze37e', // Email JS service ID
				'template_ywo8xvo', // Email JS template ID
				{
					from_name: formData.name,
					reply_to: formData.email,
					message: formData.details
				}
			);

			if (response.status === 200) {
				submitStatus.success = 'Message sent successfully!';
				// Reset form
				formData = {
					name: '',
					email: '',
					details: ''
				};
			}
		} catch (error) {
			submitStatus.error = 'Failed to send message. Please try again.';
			console.error('EmailJS error:', error);
		} finally {
			isSubmitting = false;
		}
	};
</script>

<div
	class="px-6 py-8 bg-white border-double border-4 border-[var(--on-primary)] rounded-xl shadow-lg md:max-w-xl md:px-16 lg:px-20 lg:max-w-2xl mx-auto"
>
	<h1 class="text-3xl font-bold text-center">Get in Touch</h1>
	<div class="lg:grid lg:grid-cols-1 lg:gap-8">
		<!-- Left Column - Content -->

		<div class="mb-8 lg:pt-8 lg:px-8 lg:mb-0">
			<div class="prose prose-lg">
				<p class="leading-relaxed">
					Need to build something new, enhance a project, or just get some advice? With 8 years of
					experience in JavaScript frameworks like React and Vue, I'm here to help:
				</p>
				<ul class="mt-4 space-y-2">
					<li>
						<strong>Custom Web Development:</strong> Tailored solutions using modern frameworks.
					</li>
					<li>
						<strong>Front-End Consulting:</strong> Optimizing user interfaces for better user experiences.
					</li>
					<li>
						<strong>Bug Fixes & Feature Enhancements:</strong> Fast troubleshooting and feature additions.
					</li>
					<li>
						<strong>Collaboration:</strong> Need an extra hand on your project? Let's work together.
					</li>
				</ul>
				<p class="leading-relaxed">
					Email me at <a href="mailto:manuel.alv.zum@gmail.com">manuel.alv.zum@gmail.com</a>.
					Recruiters and unique opportunities are welcome too!
				</p>
			</div>
		</div>
	</div>
</div>
