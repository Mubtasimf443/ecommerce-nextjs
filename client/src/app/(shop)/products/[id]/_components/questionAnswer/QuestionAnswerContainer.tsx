/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment, useState } from 'react'
import QuestionAnswerCard from './QuestionAnswerCard'
import  Link  from 'next/link'
import { Button } from '@/components/ui/shadcn/button'

// Mock data - Replace this with your actual data fetching logic
const mockQuestions = [
    {
        id: '1',
        text: 'Is this product available in black color?',
        askedBy: 'John Doe',
        askedAt: new Date('2025-04-15'),
        answer: {
            text: 'Yes, this product is available in black color. You can select it from the color options above.',
            answeredBy: 'Store Admin',
            answeredAt: new Date('2025-04-16'),
        },
    },
    {
        id: '2',
        text: 'What is the warranty period for this product?',
        askedBy: 'Jane Smith',
        askedAt: new Date('2025-04-14'),
        answer: {
            text: 'This product comes with a 1-year manufacturer warranty.',
            answeredBy: 'Store Admin',
            answeredAt: new Date('2025-04-14'),
        },
    },
    {
        id: '3',
        text: 'Is international shipping available?',
        askedBy: 'Mike Johnson',
        askedAt: new Date('2025-04-18'),
    },
]

interface Props {
    productId: any
}

const QuestionAnswerContainer: FC<Props> = ({ productId }) => {
    const [questions, setQuestions] = useState(mockQuestions)
    const [newQuestion, setNewQuestion] = useState('')
    const [isAskingQuestion, setIsAskingQuestion] = useState(false)

    const handleAskQuestion = (e: React.FormEvent) => {
        e.preventDefault()
        if (newQuestion.trim()) {
            const newQuestionObj = {
                id: (questions.length + 1).toString(),
                text: newQuestion,
                askedBy: 'You', // Replace with actual user name
                askedAt: new Date(),
            }
            setQuestions([newQuestionObj, ...questions])
            setNewQuestion('')
            setIsAskingQuestion(false)
        }
    }

    return (
        <div className="mt-8 bg-white rounded-xl p-6 border">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                    Questions & Answers ({questions.length})
                </h2>
                <Button
                    onClick={() => setIsAskingQuestion(true)}
                    className="px-4 py-2 text-white rounded-lg transition-colors"
                >
                    Ask a Question
                </Button>
            </div>

            {/* Ask Question Form */}
            {isAskingQuestion && (
                <form onSubmit={handleAskQuestion} className="mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <textarea
                            value={newQuestion}
                            onChange={(e) => setNewQuestion(e.target.value)}
                            placeholder="Type your question here..."
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            rows={3}
                        />
                        <div className="mt-3 flex justify-end space-x-3">
                            <Button
                                type="button"
                                onClick={() => setIsAskingQuestion(false)}
                                className="px-4 py-2 border rounded-lg bg-gray-600 hover:bg-gray-700"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="px-4 py-2  text-white rounded-lg "
                            >
                                Submit Question
                            </Button>
                        </div>
                    </div>
                </form>
            )}

            {/* Questions List */}
            <div className="space-y-4">
                {questions.map((question) => (
                    <QuestionAnswerCard key={question.id} question={question} />
                ))}
            </div>

            {questions.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                    No questions yet. Be the first to ask!
                </div>
            )}



            <Link
                href={`/products/${productId}/reviews`}
                className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center gap-1 mt-5"
            >
                View all reviews
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </Link>
        </div>
    )
}

export default QuestionAnswerContainer