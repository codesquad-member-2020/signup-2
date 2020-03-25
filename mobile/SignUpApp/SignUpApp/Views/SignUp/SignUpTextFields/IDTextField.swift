//
//  IDTextField.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/24.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class IDTextField: SignUpTextField {
    
    let regex: String = "[a-z0-9_\\-]{5,20}"
    
    private let duplicatedCode: Int = 200
    private let notDuplicatedCode: Int = 204
    
    func textFieldDidChangeSelection(_ textField: UITextField) {
        let estimatedText = textField.text ?? ""
        isValid = checkValidation(text: estimatedText, regex: regex)
        guard isValid else { return }
        request(method: "get", type: "accountId", value: estimatedText)
    }
    
    func request(method: String, type: String, value: String) {
        // "https://shrouded-tor-36901.herokuapp.com/api/users/signup-check?type=accountId&value=lynn2"
        guard let url = URL(string: "\(usersURLString)/signup-check?type=\(type)&value=\(value)") else { return }
        var request = URLRequest(url: url)
        request.httpMethod = method
        URLSession.shared.dataTask(with: request) { (data, response, err) in
            if let err = err {
                print(err)
            }
            guard let response = response as? HTTPURLResponse else { return }
            if response.statusCode == self.duplicatedCode {
                DispatchQueue.main.async {
                    self.isValid = false
                }
            } else if response.statusCode == self.notDuplicatedCode {
                DispatchQueue.main.async {
                    self.isValid = true
                }
            }
        }.resume()
    }
}
