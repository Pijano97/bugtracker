import React from "react";
import "./Main.css";
import { Bar, Pie } from "react-chartjs-2";

function Main() {
	return (
		// set onClick history.push("/...etc")
		<div className="main">
			<div className="main__bars">
				<div className="main__bar">
					<Bar
						data={{
							labels: ["None", "Low", "Medium", "High"],
							datasets: [
								{
									data: [1, 3, 4, 1],
									backgroundColor: [
										"rgba(255, 0, 4, 1)",
										"rgba(214, 0, 4, 1)",
										"rgba(162, 0, 4, 1)",
										"rgba(101, 0, 4, 1)",
									],
									borderColor: [],
									borderWidth: 1,
								},
							],
						}}
						height={400}
						width={400}
						options={{
							legend: {
								display: false,
							},
							maintainAspectRatio: false,
							scales: {
								yAxes: [
									{
										ticks: {
											stepSize: 1,
											beginAtZero: true,
										},
									},
								],
							},
						}}
					/>
					<p>Tickets by Priorty</p>
				</div>
				<div className="main__bar">
					<Pie
						data={{
							labels: ["None", "Low", "Medium", "High"],
							datasets: [
								{
									data: [1, 3, 4, 1],
									backgroundColor: [
										"rgba(51, 175, 75, 1)",
										"rgba(0, 0, 255, 1)",
										"rgba(240, 52, 52, 1)",
										"rgba(255, 175, 75, 1)",
									],
									borderColor: [],
									borderWidth: 1,
								},
							],
						}}
						height={400}
						width={400}
						backgroundColor={"rgba(240, 52, 52, 1)"}
						options={{
							legend: {
								display: false,
							},
							maintainAspectRatio: false,
							scales: {
								yAxes: [
									{
										ticks: {
											stepSize: 1,
											beginAtZero: true,
										},
									},
								],
							},
						}}
					/>
					<p>Tickets by Type</p>
				</div>
				<div className="main__bar">
					<Bar
						data={{
							labels: ["None", "Low", "Medium", "High"],
							datasets: [
								{
									data: [1, 3, 4, 1],
									backgroundColor: [
										"rgba(240, 52, 52, 1)",
										"rgba(240, 52, 52, 1)",
										"rgba(240, 52, 52, 1)",
										"rgba(240, 52, 52, 1)",
									],
									borderColor: [],
									borderWidth: 1,
								},
							],
						}}
						height={400}
						width={400}
						options={{
							legend: {
								display: false,
							},
							maintainAspectRatio: false,
							scales: {
								yAxes: [
									{
										ticks: {
											stepSize: 1,
											beginAtZero: true,
										},
									},
								],
							},
						}}
					/>
					<p>Tickets by ?</p>
				</div>
				<div className="main__bar">
					<Bar
						data={{
							labels: ["None", "Low", "Medium", "High"],
							datasets: [
								{
									data: [1, 3, 4, 1],
									backgroundColor: [
										"rgba(240, 52, 52, 1)",
										"rgba(240, 52, 52, 1)",
										"rgba(240, 52, 52, 1)",
										"rgba(240, 52, 52, 1)",
									],
									borderColor: [],
									borderWidth: 1,
								},
							],
						}}
						height={400}
						width={400}
						options={{
							legend: {
								display: false,
							},
							maintainAspectRatio: false,
							scales: {
								yAxes: [
									{
										ticks: {
											stepSize: 1,
											beginAtZero: true,
										},
									},
								],
							},
						}}
					/>
					<p>Tickets by ?</p>
				</div>
			</div>
		</div>
	);
}

export default Main;
