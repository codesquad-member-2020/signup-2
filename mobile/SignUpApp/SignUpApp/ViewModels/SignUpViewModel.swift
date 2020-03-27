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
    static let IDStatusDidChangeNotification = NSNotification.Name("IDStatusDidChangeNotification")
    static let PWStatusDidChangeNotification = NSNotification.Name("PWStatusDidChangeNotification")
    static let PWReconfirmationStatusDidChangeNotification = NSNotification.Name("PWReconfirmationStatusDidChangeNotification")
    static let NameStatusDidChangeNotification = NSNotification.Name("NameStatusDidChangeNotification")
    
    var identification: String = "" {
        didSet {
            isIdentificationValid = evaluate(text: identification, with: identificationRegex)
            let status: IdentificationStatusLabel.status = isIdentificationValid ? .available : .formError
            postIDStatusNotification(isValid: isIdentificationValid, status: status)
            guard isIdentificationValid else { return }
            networkManager.requestIDDuplicationConfirmation(ID: identification) { (isIdentificationValid) in
                self.isIdentificationValid = isIdentificationValid
                let status: IdentificationStatusLabel.status = isIdentificationValid ? .available : .duplicated
                self.postIDStatusNotification(isValid: self.isIdentificationValid, status: status)
                guard self.evaluate(text: self.identification, with: self.identificationRegex) == false else { return }
                self.isIdentificationValid = false
                self.postIDStatusNotification(isValid: false, status: .formError)
            }
            checkValidation()
        }
    }
    var password: String = "" {
        didSet {
            isPasswordValid = evaluate(text: password, with: passwordRegex)
            postPWStatusNotification(isValid: isPasswordValid, status: .available)
            checkValidation()
        }
    }
    var passwordReconfirmation: String = "" {
        didSet {
            isPasswordReconfirmationValid = passwordReconfirmation == password
            postPWReconfirmationStatusNotification(isValid: isPasswordReconfirmationValid, status: .available)
            checkValidation()
        }
    }
    var name: String = "" {
        didSet {
            isNameValid = name != ""
            postNameStatusNotification(isValid: isNameValid, status: .available)
            checkValidation()
        }
    }
    
    private var isIdentificationValid: Bool = false { didSet { checkValidation() } }
    private var isPasswordValid: Bool = false { didSet { checkValidation() } }
    private var isPasswordReconfirmationValid: Bool = false { didSet { checkValidation() } }
    private var isNameValid: Bool = false { didSet { checkValidation() } }
    
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
        isValid = isIdentificationValid && isPasswordValid && isPasswordReconfirmationValid && isNameValid
    }
    
    private func evaluate(text: String, with regex: String) -> Bool {
        NSPredicate(format: "SELF MATCHES[c] %@", regex).evaluate(with: text)
    }
    
    private func postIDStatusNotification(isValid: Bool, status: IdentificationStatusLabel.status) {
        DispatchQueue.main.async {
            NotificationCenter.default.post(name: Self.IDStatusDidChangeNotification, object: nil, userInfo: ["isValid": isValid, "status": status])
        }
    }
    
    private func postPWStatusNotification(isValid: Bool, status: IdentificationStatusLabel.status) {
        DispatchQueue.main.async {
            NotificationCenter.default.post(name: Self.PWStatusDidChangeNotification, object: nil, userInfo: ["isValid": isValid, "status": status])
        }
    }
    
    private func postPWReconfirmationStatusNotification(isValid: Bool, status: IdentificationStatusLabel.status) {
        DispatchQueue.main.async {
            NotificationCenter.default.post(name: Self.PWReconfirmationStatusDidChangeNotification, object: nil, userInfo: ["isValid": isValid, "status": status])
        }
    }
    
    private func postNameStatusNotification(isValid: Bool, status: IdentificationStatusLabel.status) {
        DispatchQueue.main.async {
            NotificationCenter.default.post(name: Self.NameStatusDidChangeNotification, object: nil, userInfo: ["isValid": isValid, "status": status])
        }
    }
}
