import React from "react";
import "./Main.css";
import { Bar } from "react-chartjs-2";

function Main() {
	return (
		<div className="main">
			<div className="main__bars">
				<div className="main__bar">
					<Bar
						className="main__barOne"
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
					<p>Tickets by Priorty</p>
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
