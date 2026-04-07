export default {
	getStats: () => {
		// 1. Get all data and filter it for the currently logged-in user
		const rawData = read_job_applications.data || [];
		const userData = rawData.filter(item => item.userId == appsmith.store.userId);

		// 2. THE TOTAL (This is now the user's personal total)
		const totalApplied = userData.length;

		// 3. COUNTS BY STATUS (Calculated only from the user's data)
		const interviewCount = userData.filter(item => item.status === "Interview").length;
		const offeredCount = userData.filter(item => item.status === "Offered").length;
		const rejectedCount = userData.filter(item => item.status === "Rejected").length;
		const pendingCount = userData.filter(item => item.status === "Applied").length;

		// 4. CALCULATED RATES
		const interviewRate = totalApplied > 0 ? (interviewCount / totalApplied) : 0;
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