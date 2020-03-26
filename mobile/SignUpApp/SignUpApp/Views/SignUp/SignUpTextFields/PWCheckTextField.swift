//
//  PWCheckTextField.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/25.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class PWCheckTextField: SignUpTextField {
    
    var password: String = ""
    
    @objc private func handlePWChanged(notification: Notification) {
        guard let password = notification.userInfo?["password"] as? String else { return }
        self.password = password
    }
    
    override func checkValidation(text: String, regex: String = "") -> Bool {
        return password == text && text != ""
    }
    
    func textFieldDidChangeSelection(_ textField: UITextField) {
        let estimatedText = textField.text ?? ""
        isValid = checkValidation(text: estimatedText)
    }
}
