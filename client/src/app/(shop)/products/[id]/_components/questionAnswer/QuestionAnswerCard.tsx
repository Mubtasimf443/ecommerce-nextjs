/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React, { FC, Fragment } from 'react'
import { format } from 'date-fns'

interface Props {
  question: {
    id: string
    text: string
    askedBy: string
    askedAt: Date
    answer?: {
      text: string
      answeredBy: string
      answeredAt: Date
    }
  }
}

const QuestionAnswerCard: FC<Props> = ({ question }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4 hover:shadow-md transition-shadow border border-gray-100">
      {/* Question Section */}
      <div className="mb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-indigo-600 font-semibold">Q</span>
            </div>
            <div>
              <p className="text-gray-900 font-medium">{question.text}</p>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-sm text-gray-500">Asked by {question.askedBy}</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-500">
                  {format(question.askedAt, 'MMM d, yyyy')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Answer Section */}
      {question.answer ? (
        <div className="ml-8 pl-4 border-l-2 border-indigo-100">
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-semibold">A</span>
            </div>
            <div>
              <p className="text-gray-800">{question.answer.text}</p>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-sm text-gray-500">
                  Answered by {question.answer.answeredBy}
                </span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-500">
                  {format(question.answer.answeredAt, 'MMM d, yyyy')}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="ml-8">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
            Waiting for answer
          </span>
        </div>
      )}
    </div>
  )
}

export default QuestionAnswerCard