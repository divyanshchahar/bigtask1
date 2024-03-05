function EmailInputComponent({ labelName }: { labelName: string }) {
	return (
		<div className="mb-3">
			<label htmlFor="exampleInputEmail1" className="form-label">
				{labelName}
			</label>
			<input type="email" className="form-control" />
		</div>
	);
}

export default EmailInputComponent;