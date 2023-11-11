interface DisclaimerProps {
	full?: boolean;
}

export function Disclaimer({ full }: DisclaimerProps) {
	return (
		<p className="px-4 py-3 border-2 border-blue-300 bg-blue-100 rounded-md text-zinc-700 font-medium">
			{full && (
				<>
					Hier kommt die Überschrift beim Einloggen hin
					<br />
				</>
			)}
			Unterüberschrift beim Einloggen (bsp.: Hier können alle Konversationen überwacht werden.)
		</p>
	);
}