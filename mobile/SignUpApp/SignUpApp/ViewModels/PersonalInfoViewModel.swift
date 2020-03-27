//
//  PersonalInfoViewModel.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/27.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class PersonalInfoViewModel {
    
    static let PersonalInfoValidationDidChangeNotification = NSNotification.Name("PersonalInfoValidationDidChangeNotification")
    static let EmailStatusDidChangeNotification = NSNotification.Name("EmailStatusDidChangeNotification")
    static let PhoneStatusDidChangeNotification = NSNotification.Name("PhoneStatusDidChangeNotification")
    
    var birthDate: Date? { didSet { checkValidation() } }
    var isMale: Bool = false { didSet { checkValidation() } }
    var email: String = "" {
        didSet {
            isEmailValid = evaluate(text: email, with: emailRegex)
            postEmailStatusNotification(isValid: isEmailValid)
        }
    }
    var phone: String = "" {
        didSet {
            isPhoneValid = evaluate(text: phone, with: phoneRegex)
            postPhoneStatusNotification(isValid: isPhoneValid)
        }
    }
    
    var isEmailValid: Bool = false { didSet { checkValidation() } }
    var isPhoneValid: Bool = false { didSet { checkValidation() } }
    
    var isValid: Bool = false {
        didSet {
            DispatchQueue.main.async {
                NotificationCenter.default.post(name: Self.PersonalInfoValidationDidChangeNotification, object: nil, userInfo: ["isValid": self.isValid])
            }
        }
    }
    
    private let emailRegex = "^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\\.[a-zA-Z]{2,3}$"
    private let phoneRegex = "(\\d{3}).*(\\d{3}).*(\\d{4})"
    
    private func checkValidation() {
        isValid = (birthDate != nil) && isEmailValid && isPhoneValid
    }
    
    private func evaluate(text: String, with regex: String) -> Bool {
        NSPredicate(format: "SELF MATCHES[c] %@", regex).evaluate(with: text)
    }
    
    private func postEmailStatusNotification(isValid: Bool) {
        DispatchQueue.main.async {
            NotificationCenter.default.post(name: Self.EmailStatusDidChangeNotification, object: nil, userInfo: ["isValid": isValid])
        }
    }
    
    private func postPhoneStatusNotification(isValid: Bool) {
        DispatchQueue.main.async {
            NotificationCenter.default.post(name: Self.PhoneStatusDidChangeNotification, object: nil, userInfo: ["isValid": isValid])
        }
    }
}
