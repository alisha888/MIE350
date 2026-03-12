export default {
	getStats: () => {
		const data = read_job_applications.data || [];
		
		// 1. THE TOTAL (This is your "Applied" total)
		const totalApplied = data.length;
		
		// 2. COUNTS BY STATUS
		const interviewCount = data.filter(item => item.status === "Interview").length;
		const offeredCount = data.filter(item => item.status === "Offered").length;
		const rejectedCount = data.filter(item => item.status === "Rejected").length;
		
		// This counts ONLY the ones still in the 'Applied' stage (Pending)
		const pendingCount = data.filter(item => item.status === "Applied").length;

		// 3. CALCULATED RATES (For your Progress Bars)
		// How many of your total applications turned into interviews?
		const interviewRate = totalApplied > 0 ? (interviewCount / totalApplied) : 0;
		
		// Success Rate: Total applications turned into offers
		const offerRate = totalApplied > 0 ? (offeredCount / totalApplied) : 0;

		return {
			total: totalApplied,
			pending: pendingCount,
			interview: interviewCount,
			rejected: rejectedCount,
			offered: offeredCount,
			interviewRate: interviewRate,
			offerRate: offerRate
		};
	}
}