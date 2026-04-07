import React from 'react'
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { Link } from 'react-router';
export default function Errorpage() {
    return (

        <div className="min-h-screen flex items-center justify-center  bg-gradient-to-br from-base-200 to-base-300 px-4">

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="card w-full max-w-lg shadow-2xl bg-base-100 rounded-2xl"
            >
                <div className="card-body items-center text-center space-y-4">
                    <motion.div
                        initial={{ rotate: -10 }}
                        animate={{ rotate: 0 }}
                        transition={{ type: "spring", stiffness: 120 }}
                        className="text-error"
                    >
                        <AlertTriangle size={64} />
                    </motion.div>

                    <h1 className="text-5xl font-bold">404</h1>
                    <h2 className="text-xl font-semibold">Page Not Found</h2>

                    <p className="text-base-content/70">
                        Oops! The page you are looking for doesn’t exist or has been moved.
                    </p>

                    <div className="flex gap-3 pt-4">
                        <Link to="/">
                            <button className="btn btn-primary">Go Home</button>
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="btn btn-outline"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
