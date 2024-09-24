"use client";

import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Nav from './components/navbar';
import Mark from './components/mark';

const GlobeVisualization = dynamic<{ setLoading: (loading: boolean) => void }>(() => import('./components/GlobeVisualization'), {
	ssr: false,
	loading: () => <p>Loading...</p>,
});

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	const handleSetLoading = useCallback((loading: boolean) => {
		setIsLoading(loading);
	}, []);

	return (
		<main className="flex flex-col justify-center" style={{ backgroundColor: '#000010' }}>
			{isLoading && (
				<div className="fixed inset-0 flex items-center justify-center bg-black z-50">
					<p className="text-white text-4xl">Loading...</p>
				</div>
			)}
			<div className="flex-1">
				<GlobeVisualization setLoading={handleSetLoading} />
			</div>
			<Mark />
		</main>
	);
}
