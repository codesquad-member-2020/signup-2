//
//  SignUpViewModel.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/26.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class SignUpViewModel {
    
    var identification: String = "" {
        didSet {
            if evaluate(text: identification, with: identificationRegex) {
                isIdentificationValid = true
                requestIDDuplicationConfirmation(ID: identification)
            } else {
                checkValidation()
            }
        }
    }
    var password: String = "" { didSet { checkValidation() } }
    var passwordReconfirmation: String = "" { didSet { checkValidation() } }
    var name: String = "" { didSet { checkValidation() } }
    var isIdentificationValid: Bool = false { didSet { checkValidation() } }
    
    var isValid: Bool = false {
        didSet {
            signUpValidationChangeHandler?(isValid)
        }
    }
    
    var signUpValidationChangeHandler: ((Bool) -> Void)?
    
    let identificationRegex: String = "[a-z0-9_\\-]{5,20}"
    let passwordRegex: String = "(?=.*\\d{1,50})(?=.*[~`!@#$%\\^&*()-+=]{1,50})(?=.*[a-z]{1,50})(?=.*[A-Z]{1,50}).{8,16}$"
    
    private func checkValidation() {
        let isPasswordValid = evaluate(text: identification, with: identificationRegex) && password != ""
        let isPasswordReconfirmationValid = passwordReconfirmation == password
        let isNameValid = name != ""
        isValid = isIdentificationValid && isPasswordValid && isPasswordReconfirmationValid && isNameValid
    }
    
    private func evaluate(text: String, with regex: String) -> Bool {
        NSPredicate(format: "SELF MATCHES[c] %@", regex).evaluate(with: text)
    }
    
    private let usersURLString = "https://shrouded-tor-36901.herokuapp.com/api/users/"
    private let duplicatedCode: Int = 200
    private let notDuplicatedCode: Int = 204
    private let type = "accountId"
    
    func requestIDDuplicationConfirmation(ID value: String) {
        guard let url = URL(string: "\(usersURLString)/signup-check?type=\(type)&value=\(value)") else { return }
        let request = URLRequest(url: url)
        URLSession.shared.dataTask(with: request) { (data, response, err) in
            if let err = err {
                print(err)
            }
            guard let response = response as? HTTPURLResponse else { return }
            if response.statusCode == self.duplicatedCode {
                self.isIdentificationValid = false
            } else if response.statusCode == self.notDuplicatedCode {
                self.isIdentificationValid = true
            }
        }.resume()
    }
}
