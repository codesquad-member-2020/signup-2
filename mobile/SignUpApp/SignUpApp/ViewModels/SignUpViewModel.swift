//
//  SignUpViewModel.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/26.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class SignUpViewModel {
    
    private let networkManager = NetworkManager()
    static let ValidationDidChangeNotification = NSNotification.Name("SignUpValidationDidChangeNotification")
    
    var identification: String = "" {
        didSet {
            isIdentificationValid = evaluate(text: identification, with: identificationRegex)
            networkManager.requestIDDuplicationConfirmation(ID: identification) { (isIdentificationValid) in
                self.isIdentificationValid = isIdentificationValid
            }
            checkValidation()
        }
    }
    var password: String = "" { didSet { checkValidation() } }
    var passwordReconfirmation: String = "" { didSet { checkValidation() } }
    var name: String = "" { didSet { checkValidation() } }
    var isIdentificationValid: Bool = false { didSet { checkValidation() } }
    
    var isValid: Bool = false {
        didSet {
            DispatchQueue.main.async {
                NotificationCenter.default.post(name: Self.ValidationDidChangeNotification, object: nil, userInfo: ["isValid": self.isValid])
            }
        }
    }
    
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
}
