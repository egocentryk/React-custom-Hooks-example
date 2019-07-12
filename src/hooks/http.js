import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies) => {

	const [isLoading, setIsLoading] = useState(false);
	const [fetchedData, setFetchedData] = useState(null);

	useEffect(() => {
		setIsLoading(true);

		console.log('Sending http request to URL: ' + url);

		fetch(url).then(r => {
			if(!r.ok) {
				throw new Error('Failed to fetch data.');
			}

			return r.json();
		}).then(data => {

			setIsLoading(false);
			setFetchedData(data);

		}).catch(err => {
			console.log(err);
			setIsLoading(false);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, dependencies);

	return [isLoading, fetchedData];
}
