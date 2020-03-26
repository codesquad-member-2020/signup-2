//
//  SignUpTextField.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/23.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

protocol SignUpValidationChangedUpdatable {
    func updateAlertLabel(isValid: Bool)
}

class SignUpTextField: UITextField {
    
    static let WrongAlertColor = UIColor(named: "AlertWrong")!
    static let CorrectAlertColor = UIColor(named: "AlertCorrect")!
    let usersURLString = "https://shrouded-tor-36901.herokuapp.com/api/users/"
    
    override var isHighlighted: Bool {
        didSet {
            if isHighlighted { borderColor = #colorLiteral(red: 0.2392156869, green: 0.6745098233, blue: 0.9686274529, alpha: 1) }
            else { updateTextField(for: isValid) }
        }
    }
    
    var validationDelegate: SignUpValidationChangedUpdatable?
    
    var isValid: Bool = false {
        didSet {
            updateTextField(for: isValid)
            validationChangedHandler?(isValid)
        }
    }
    
    var validationChangedHandler: ((Bool) -> Void)?
    
    var borderColor: UIColor = .darkGray {
        didSet {
            layer.borderColor = borderColor.cgColor
        }
    }
    
    private func updateTextField(for isValid: Bool) {
        borderColor = isValid ? SignUpTextField.CorrectAlertColor : SignUpTextField.WrongAlertColor
        validationDelegate?.updateAlertLabel(isValid: isValid)
    }
    
    func checkValidation(text: String, regex: String) -> Bool {
        NSPredicate(format: "SELF MATCHES[c] %@", regex).evaluate(with: text)
    }

    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    override func textRect(forBounds bounds: CGRect) -> CGRect {
        return bounds.insetBy(dx: 8, dy: 0)
    }
    
    override func editingRect(forBounds bounds: CGRect) -> CGRect {
        return bounds.insetBy(dx: 8, dy: 0)
    }
    
    private func configure() {
        layer.borderWidth = 1.5
        layer.cornerRadius = 0
        borderStyle = .none
    }
}

extension SignUpTextField: UITextFieldDelegate {
    func textFieldDidEndEditing(_ textField: UITextField) {
        updateTextField(for: isValid)
    }
}
