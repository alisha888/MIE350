export default {
	getFilteredApps: () => {
		const apps = getApp.data || [];
		const companies = read_companies.data || [];
		const currentUserId = appsmith.store.userId;

		return apps
			.filter(app => app.userId == currentUserId)
			.map(app => {
				// Find the matching company in our company list
				const matchedCompany = companies.find(c => c.id == app.companyId);
				
				return {
					...app,
					// Create a new field 'companyName' for the table to display
					companyName: matchedCompany ? matchedCompany.name : "N/A" 
				};
			});
	}
}